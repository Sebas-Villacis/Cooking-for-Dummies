<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\score;
//require 'ScoreMD.php';

class ScoreDP extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $newScore = new score();
        $newScore = \App\score::find(1);

        $newScore->id_usuario = $request->input('usuario');
        $newScore->valor = $request->input('valor');
        $newScore->id_competencia = $request->input('competencia');
        $newScore->save();

        return back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id=null, $usuario=null, $valor=null, $competencia=null)
    {
        $result = array("Valor no encontrado");

        if($id != null)
            $result = \App\score::findOrFail($id);
        else if($usuario != null)
            $result = \App\score::where('usuario', $usuario);
        else if($valor != null)
            $result = \App\score::where('valor', $valor);
        else if($competencia != null)
            $result = \App\score::where('competencia', $competencia);

        return $result;
    }
    public function showAll()
    {
        $scores = \App\score::all();
        return $scores;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $usuario = $request->input('usuario');
        $valor = $request->input('valor');
        $competencia = $request->input('competencia');
       
       $updateScore = Recipe::where('id', $id)
                    -> update(['id_usuario'=>$usuario],['valor'=>$valor],['id_competencia'=>$competencia]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = score::where('id', '=', $request->input('id'));
        if ($id != null) 
            $id->delete();
        return back();
    }
}