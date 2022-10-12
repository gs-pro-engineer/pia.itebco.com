<?php

namespace App\Http\Controllers;

use App\Http\Requests\UploadImageRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\GoogleAPIKeyImportRepository;

class UploadController extends Controller
{
	protected $repo;

    /**
     * Instantiate a new instance
     * @return void
     */
	public function __construct(
		GoogleAPIKeyImportRepository $repo
	) {
		$this->repo = $repo;
	}

    public function image(UploadImageRequest $request)
    {
        $image = \Storage::disk('public')->putFile('editor-images', request()->file('image'));

        $url = url('/storage/'.$image);

        return $this->success(['success' => true, 'url' => $url]);
    }

    public function googleApiKey()
    {	
    	return $this->success($this->repo->startImport());
    }
}
