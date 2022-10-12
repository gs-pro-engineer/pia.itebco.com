<?php

namespace App\Http\Resources;

use App\Enums\MeetingStatus;
use App\Helpers\ArrHelper;
use App\Helpers\CalHelper;
use App\Helpers\SysHelper;
use App\Http\Resources\MediaCollection;
use App\Http\Resources\Option;
use App\Http\Resources\User;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class Meeting extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $type = ArrHelper::searchByKey(ArrHelper::getTransList('types', 'meeting'), 'uuid', $this->type);

        $status = $this->getMeta('status');
        $config = $this->getMeta('config');

        $this->shouldEnd();

        $can_moderate = false;
        $is_blocked = true;
        $is_host = $this->user_id == \Auth::id() ? true : false;

        if ($this->getMeta('is_pam') && ! \Auth::check()) {
            $is_blocked = false;
        } else if ($this->user_id == \Auth::id() || \Auth::user()->hasRole('admin')) {
            $can_moderate = true;
            $is_blocked = false;
        } else {
            $invitee = $this->getInvitee();
            $is_blocked = $invitee->getMeta('is_blocked') ? true : false;
            $can_moderate = $invitee->getMeta('is_moderator') ? true : false;
        }

        return [
           'uuid'                    => $this->uuid,
           'title'                   => $this->title,
           'is_host'                 => $is_host,
           'is_instant_meeting'      => $this->getMeta('instant'),
           'accessible_via_link'     => $this->getMeta('accessible_via_link'),
           'is_pam'                  => $this->getMeta('is_pam'),
           'is_paid'                 => $this->is_paid,
           'fee'                     => $this->when($this->is_paid, SysHelper::formatCurrency($this->getFee('amount'))),
           'has_paid'                => $this->when($this->is_paid, $this->has_paid),
           'identifier'              => $this->getMeta('identifier'),
           'keep_alive'              => $this->getMeta('keep_alive'),
           'agenda'                  => $this->agenda,
           'auto_translate'          => $this->auto_translate,
           'cover'                   => $this->getMeta('cover_image'),
           'type'                    => $type,
           'category'                => new Option($this->whenLoaded('category')),
           'description'             => $this->description,
           'start_date_time'         => CalHelper::toDateTime($this->start_date_time),
           'period'                  => $this->period,
           'attachments'             => new MediaCollection($this->getMedia()),
           'planned_start_date_time' => CalHelper::toDateTime($this->planned_start_date_time),
           'status'                  => $status,
           'has_snapshots'           => count($this->getMedia('snapshots')) ? true : false,
           'has_recordings'          => count($this->getMedia('recordings')) ? true : false,
           'has_chunk_recordings'    => count($this->getMeta('chunk_recordings') ?? []) ? true : false,
           'config'                  => array(
               'enable_comments'                      => $this->getConfig($config, 'enable_comments'),
               'private_comments'                     => $this->getConfig($config, 'private_comments'),
               'enable_comment_before_meeting_starts' => $this->getConfig($config, 'enable_comment_before_meeting_starts'),
               'enable_chat'                          => $this->getConfig($config, 'enable_chat'),
               'enable_screen_sharing'                => $this->getConfig($config, 'enable_screen_sharing'),
               'enable_recording'                     => $this->getConfig($config, 'enable_recording'),
               'enable_auto_recording'                => $this->getConfig($config, 'enable_auto_recording'),
               'auto_upload_recording'                => $this->getConfig($config, 'auto_upload_recording'),
               'auto_upload_recorded'                 => $this->getConfig($config, 'auto_upload_recorded'),
               'can_stop_auto_recording'              => $this->getConfig($config, 'can_stop_auto_recording'),
               'enable_hand_gesture'                  => $this->getConfig($config, 'enable_hand_gesture'),
               'footer_auto_hide'                     => $this->getConfig($config, 'footer_auto_hide'),
               'enable_file_sharing'                  => $this->getConfig($config, 'enable_file_sharing'),
               'enable_link_sharing'                  => $this->getConfig($config, 'enable_link_sharing'),
               'enable_whiteboard'                    => $this->getConfig($config, 'enable_whiteboard'),
               'disable_scroll'                       => $this->getConfig($config, 'disable_scroll'),
               'speech_detection'                     => $this->getConfig($config, 'speech_detection'),
               'mute_participants_on_start'           => $this->getConfig($config, 'mute_participants_on_start'),
               'allow_joining_without_devices'        => $this->getConfig($config, 'allow_joining_without_devices'),
               'pam_open_join_as_guest_page'          => $this->getConfig($config, 'pam_open_join_as_guest_page'),
               'pam_enable_screen_sharing_for_guest'  => $this->getConfig($config, 'pam_enable_screen_sharing_for_guest'),
               'pam_enable_link_sharing_for_guest'    => $this->getConfig($config, 'pam_enable_link_sharing_for_guest'),
               'pam_enable_whiteboard_for_guest'      => $this->getConfig($config, 'pam_enable_whiteboard_for_guest'),
               'enable_snapshot'                      => $this->getConfig($config, 'enable_snapshot'),
               'anyone_can_take_snapshot'             => $this->getConfig($config, 'anyone_can_take_snapshot'),
               'enable_snapshot_alert'                => $this->getConfig($config, 'enable_snapshot_alert'),
               'snapshot_alert_to_user_only'          => $this->getConfig($config, 'snapshot_alert_to_user_only'),
               'snapshot_alert_to_moderators'         => $this->getConfig($config, 'snapshot_alert_to_moderators'),
               'ask_host_before_joining'              => $this->getConfig($config, 'ask_host_before_joining'),
               'prefer_rear_camera_first'             => $this->getConfig($config, 'prefer_rear_camera_first'),
               'enable_user_avatar'                   => $this->getConfig($config, 'enable_user_avatar'),
               'enable_full_user_avatar'              => $this->getConfig($config, 'enable_full_user_avatar'),
               'enable_meeting_info'                  => $this->getConfig($config, 'enable_meeting_info'),
               'force_update_username'                => $this->getConfig($config, 'force_update_username'),
               'auto_end_meeting'                     => $this->getConfig($config, 'auto_end_meeting'),
               'alert_before_auto_end'                => $this->getConfig($config, 'alert_before_auto_end'),
               'can_snooze_auto_end'                  => $this->getConfig($config, 'can_snooze_auto_end'),
               'can_cancel_auto_end'                  => $this->getConfig($config, 'can_cancel_auto_end'),
               'alert_before_auto_end_time'           => (int) $this->getConfig($config, 'alert_before_auto_end_time', false),
               'max_participant_count'                => (int) $this->getConfig($config, 'max_participant_count', false),
               'layout'                               => $this->getConfig($config, 'layout', false),
           ),
           'max_participant_count'   => (int) $this->getConfig($config, 'max_participant_count', false),
           'accessible_to_members' => (bool) $this->getMeta('accessible_to_members'),
           'delayed'               => $this->getMeta('snooze_logs') ? true : false,
           'cancellation_reason'   => $this->getMeta('cancellation_reason') ? : null,
           'room_id'               => $this->when($status === 'live', $this->getMeta('room_id')),
           'started_at'            => CalHelper::toDateTime($this->getMeta('started_at')),
           'ended_at'              => CalHelper::toDateTime($this->getMeta('ended_at')),
           'estimated_end_time'    => CalHelper::toDateTime($this->getMeta('estimated_end_time')),
           'user'                  => $this->when(\Auth::check(), new User($this->whenLoaded('user'))),
           'can_moderate'          => $can_moderate,
           'is_blocked'            => $is_blocked,
           'created_at'            => CalHelper::toDateTime($this->created_at),
           'updated_at'            => CalHelper::toDateTime($this->updated_at)
        ];
    }

    private function getConfig($config, $key, $is_boolean = true)
    {
        $value = Arr::has($config, $key) ? Arr::get($config, $key) : config('config.meeting.' . $key);

        if ($is_boolean) {
            return $value ? true : false;
        }

        return $value;
    }
}
