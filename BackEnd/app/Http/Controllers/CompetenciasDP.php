<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompetenciasDP extends Controller
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
        $request->validate([
            'nombrecompetencia' => 'bail|required',
            'tiempo' => 'required',
            'descripcion' => 'required',
            'fechacreacion'=> 'required',

        ], [
            'nombrecompetencia.required' => 'El campo :attribute es obligatorio',
            'tiempo.required' => 'El campo :attribute es obligatorio',
            'descripcion.required' => 'El campo :attribute es obligatorio',
            'fechacreacion.required' => 'El campo :attribute es obligatorio',
        ]);
        $competencia = $request->input('nombrecompetencia');
        $tiempo = $request->input('tiempo');
        $descripcion = $request->input('descripcion');
        $fechacreacion = $request->input('fechacreacion');
       $newcompetencia = new Competencia();
       $newcompetencia->nombreReceta=$nombreReceta;
       $newcompetencia->fechacreacion=$fechacreacion;
       $newcompetencia->tiempo=$tiempo;
       $newcompetencia->descripcion=$descripcion;
       $newcompetencia->save();
       return back()->with(['message'=> 'Competencia creada con éxito']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $request->validate([
            'nombrecompetencia' => 'bail|required',
            'tiempo' => 'required',
            'descripcion' => 'required',
            'fechacreacion'=> 'required',

        ], [
            'nombrecompetencia.required' => 'El campo :attribute es obligatorio',
            'tiempo.required' => 'El campo :attribute es obligatorio',
            'descripcion.required' => 'El campo :attribute es obligatorio',
            'fechacreacion.required' => 'El campo :attribute es obligatorio',
        ]);
        //cuando este modifcando la  vista de receta y haga click en actutalizar
        //se enviara el id de la receta alcontrolador, el cual  esta en la vista como un campo oculto
       $buscarcompetencia = Recipe::find($request->input('id'))->value('id');//obtiene id de la receta  a actualizar 
       $competencia = $request->input('nombrecompetencia');
       $tiempo = $request->input('tiempo');
       $descripcion = $request->input('descripcion');
       $fechacreacion = $request->input('fechacreacion');
        $newcompetencia = new Competencia();
        $newcompetencia->nombreReceta=$nombreReceta;
        $newcompetencia->fechacreacion=$fechacreacion;
        $newcompetencia->tiempo=$tiempo;
        $newcompetencia->descripcion=$descripcion;
        $newcompetencia->save();
       $recetaActualizada=Recipe::where('id',$id)
                                ->update(['nombrecompetencia'=>$nombreReceta],['tiempo'=>$tiempo],
                                        ['descripcion'=>$fechacreacion],['fechacreacion'=>$fechacreacion]);
        return back()->with(['message'=> 'Receta actualizada']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = Recipe::where('id', '=', $id);

        if ($id != null) {
            $id->delete();//returna a la vista con un mensaje de aprovacion
            return back()->with(['message'=> 'Successfully deleted!!']);
        }//returna a la vista con un mensaje de error
        return back()->with(['message'=> 'Error,comuniquese con el administardor']);
    }

    public function getByNombre(Request $request)
    {
        $recetas =  Recipe::where('nombrecompetencia','LIKE','%'.$request->input('nombrecompetencia'.'%') )->get();
        if ($recetas != null) {
            return $recetas ;//retorna un arreglo con todas las recetas que cumplen
            //con el nombre solicitado
        }
        return back()->with(['message'=> 'No existe la competencia solicitada']);
    }
}
