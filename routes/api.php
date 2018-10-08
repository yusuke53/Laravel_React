<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/yamakis', function (Request $request) {
    $yamakis = collect([
        [
            'key'  => 'yamaki1',
            'name' => '山木１号',
            'era'  => 1.62,
            'win'  => 20,
        ],
        [
            'key'  => 'yamaki2',
            'name' => '山木２号',
            'era'  => 2.29,
            'win'  => 12,
        ],
        [
            'key'  => 'yamaki3',
            'name' => '山木３号',
            'era'  => 2.60,
            'win'  => 17,
        ],
    ]);
    return response()->json( $yamakis );

});
Route::resource('/data','Api\DataController');
