<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\score;
use App\Competencia;
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
        $ultimo = score::all()->sortBy('scoid')->last();
        if($ultimo==null)
        {
            $codigo=1;
        }
        else{$codigo = $ultimo->scoid+1;}
        $newScore = new score();
        $comp = Competencia::all()->sortBy('matnombre')->last();
        $competencia = $comp->matnombre;
        $puntaje = $request->input('scovalor');
        $descripcion = $request->input('scocompetencia');
       $newscore = new score();
       $newscore->matnombre=$competencia;
       $newscore->scoid=$codigo;
       $newscore->scovalor=$puntaje;
       $newscore->scocompetencia=$descripcion;


       $newscore->save();
       return back()->with(['message'=> 'Competencia creada con éxito']);
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