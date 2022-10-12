import Vue from 'vue'

import * as MomentTz from '@core/filters/momentz'

// Importing other components RAMMdfup6Ys0ltzB
import SearchUser from '@components/SearchUser'
import ProfileButtons from '@components/ProfileButtons'
import PopoverButtons from '@components/PopoverButtons'
import ProfileCard from '@components/ProfileCard'
import SmallProfileCard from '@components/SmallProfileCard'
import ViewUser from '@components/ViewUser'
import UserAvatar from '@components/UserAvatar'
import SearchTag from '@components/SearchTag'
import TableRowActions from '@components/TableRowActions'
import KeepAddingForm from '@components/KeepAddingForm'

// Registering Components
Vue.component(SearchUser.name, SearchUser)
Vue.component(ProfileButtons.name, ProfileButtons)
Vue.component(PopoverButtons.name, PopoverButtons)
Vue.component(ProfileCard.name, ProfileCard)
Vue.component(SmallProfileCard.name, SmallProfileCard)
Vue.component(ViewUser.name, ViewUser)
Vue.component(UserAvatar.name, UserAvatar)
Vue.component(SearchTag.name, SearchTag)
Vue.component(KeepAddingForm.name, KeepAddingForm)
Vue.component(TableRowActions.name, TableRowActions)


Vue.filter("momentDate", MomentTz.momentDate)
Vue.filter("momentTime", MomentTz.momentTime)
Vue.filter("momentDateTime", MomentTz.momentDateTime)
Vue.filter("momentTimeTz", MomentTz.momentTimeTz)
Vue.filter("momentDateTimeTz", MomentTz.momentDateTimeTz)
Vue.filter("momentCalendar", MomentTz.momentCalendar)
Vue.filter("momentCalendarTz", MomentTz.momentCalendarTz)
