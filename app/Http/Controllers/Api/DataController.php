<?php

namespace App\Http\Controllers\Api;

use App\Data;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Data::all();

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->data()->create([
            'number' => $request->number,
            'shot' => $request->shot,
            'miss' => $request->miss,
            'GB' => $request->GB,
        ]);

        return redirect('/input');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\inputdata  $inputdata
     * @return \Illuminate\Http\Response
     */
    public function show(inputdata $inputdata)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\inputdata  $inputdata
     * @return \Illuminate\Http\Response
     */
    public function edit(inputdata $inputdata)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\inputdata  $inputdata
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, inputdata $inputdata)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\inputdata  $inputdata
     * @return \Illuminate\Http\Response
     */
    public function destroy(inputdata $inputdata)
    {
        //
    }
}
