<?php
namespace App\Repositories;

use Illuminate\Support\Str;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;

ini_set('max_execution_time', 0);

class GoogleAPIKeyImportRepository
{

	protected $path = '/uploads/temp/google-api-key-import/';

  /**
    * Upload file for import
    */
  public function startImport() : array
  {
    $extension = request()->file('file')->getClientOriginalExtension();

    if ($extension != 'json') {
        throw ValidationException::withMessages(['message' => trans('config.system.json_file_supported')]);
    }

    $uuid = Str::uuid();
    \Storage::putFileAs($this->path, request()->file('file'), $uuid.'.json');

    return compact('uuid');
  }
}