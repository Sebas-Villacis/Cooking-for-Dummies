<?php

namespace App\Http\Controllers;
use App\Competencia;
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
        $competencia = $request->input('matnombre');
        $tiempo = $request->input('mattiempo');
        $receta = $request->input('recid');
        $descripcion = $request->input('matdescripcion');
        $fechacreacion = $request->input('matfechacreacion');
       $newcompetencia = new Competencia();
       $newcompetencia->matnombre=$competencia;
       $newcompetencia->matfechacreacion=$fechacreacion;
       $newcompetencia->mattiempo=$tiempo;
       $newcompetencia->matdescripcion=$descripcion;
       $newcompetencia->recid=$receta;

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
       $competencia = $request->input('matnombre');
        $tiempo = $request->input('mattiempo');
        $receta = $request->input('recid');
        $descripcion = $request->input('matdescripcion');
        $fechacreacion = $request->input('matfechacreacion');
       $recetaActualizada=Competencia::where('id',$id)
                                ->update(['matnombre'=>$competencia],['recid'=>$receta],['mattiempo'=>$tiempo],
                                        ['matdescripcion'=>$descripcion],['matfechacreacion'=>$fechacreacion]);
        return back()->with(['message'=> 'Competencia actualizada']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $id = Competencia::where('matnombre', '=', $id);

        if ($id != null) {
            $id->delete();//returna a la vista con un mensaje de aprovacion
            return back()->with(['message'=> 'Successfully deleted!!']);
        }//returna a la vista con un mensaje de error
        return back()->with(['message'=> 'Error,comuniquese con el administardor']);
    }

    public function getByNombre($nombre)
    {
        
       
        $competencia =  Array('data'=>Recipe::where('matnombre','LIKE','%'.strtoupper($nombre).'%')->get());
        if ($competencia != null) {
            return json_encode($competencia);//retorna un arreglo con todas las recetas que cumplen
            //con el nombre solicitado
        }
        return "no existe la receta solicitada";
    }
}
