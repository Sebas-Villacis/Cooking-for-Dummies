<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Recipe;
class RecipeController extends Controller
{
    //!En el modelo se especificara los campos la primary key
    //! eso sera presentado cuando toco hacer la capa del modelo de acuerdo a la planificación
    public function store(Request $request)
    {
        //bail se usa para que si la primera validación falla
        //no sigan con las demas sino se corte el procesi y bote el mensaje de error
        //mimes indica el formato de imagen perimitido
        //max tamaño maximo de imagen.
        $request->validate([
            'categoria' => 'bail|required',
            'nombreReceta' => 'required',
            'tiempo' => 'required',
            'descripcion' => 'required',
            'imagen' => 'required|image|mimes:jpeg,jpg,gif|max"2048',
                                
        ], [
            'categoria.required' => 'El campo :attribute es obligatorio',
            'nombreReceta.required' => 'El campo :attribute es obligatorio',
            'tiempo.required' => 'El campo :attribute es obligatorio',
            'descripcion.required' => 'El campo :attribute es obligatorio',
            'imagen.required' => 'El campo :attribute es obligatorio', 
        ]);
        //! Debe verse en done se va a guardar las imagenes en una carpeta en laravel o ionic
        //! ahorita solo guarda el path de la imagen en la base de datos.
        $categoria = $request->input('categoria');
        $nombreReceta = $request->input('nombreReceta');
        $tiempo = $request->input('tiempo');
        $imagen = $request->file('imagen');
       $nuevaReceta = new Recipe();
       //tamaño total del campo id 13
       //implementacion del concepto blockchain como generador de id unicos.
       //estos id cambiaran si las informacion es modificada
       $nuevaReceta->id=Hash::make(substr($categoria,0,3).substr($nombreReceta(1,2)).$tiempo.substr($imagen->getClientOriginalName(),-1,4).rand(2,4));
       $nuevaReceta->nombreReceta=$nombreReceta;
       $nuevaReceta->categoria=$categoria;
       $nuevaReceta->tiempo=$request->$tiempo;
       $nuevaReceta->descripcion=$request->input('descripcion');
       $nuevaReceta->imagen=$imagen;
       $nuevaReceta->save();
       return back()->with(['message'=> 'Receta ingresada con éxito']);
       
    }
    

    public function update(Request $request) { 
        $request->validate([
            'categoria' => 'bail|required',
            'nombreReceta' => 'required',
            'tiempo' => 'required',
            'descripcion' => 'required',
            'imagen' => 'required|image|mimes:jpeg,jpg,gif|max"2048',
                                
        ], [
            'categoria.required' => 'El campo :attribute es obligatorio',
            'nombreReceta.required' => 'El campo :attribute es obligatorio',
            'tiempo.required' => 'El campo :attribute es obligatorio',
            'descripcion.required' => 'El campo :attribute es obligatorio',
            'imagen.required' => 'El campo :attribute es obligatorio', 
        ]);
        //cuando este modifcando la  vista de receta y haga click en actutalizar
        //se enviara el id de la receta alcontrolador, el cual  esta en la vista como un campo oculto
       $buscarReceta = Recipe::find($request->input('id'))->value('id');//obtiene id de la receta  a actualizar 
       $idPrevio = $RecetaActualizada;
       $categoria = $request->input('categoria');
       $nombreReceta = $request->input('nombreReceta');
       $tiempo = $request->input('tiempo');
       $imagen = $request->file('imagen');
       $idNueva= Hash::make(substr($categoria,0,3).substr($nombreReceta(1,2)).$tiempo.substr($imagen->getClientOriginalName(),-1,4).rand(2,4));
       
       $recetaActualizada=Recipe::where('id',$idPrevio)
                                ->update(['id'=>$idNueva],['categoria'=>$categoria],['nombreReceta'=>$nombreReceta],['tiempo'=>$tiempo],
                                        ['descripcion'=>$request->input('descripcion')],['imagen'=>$imagen]);
        return back()->with(['message'=> 'Receta actualizada']);
    }
    public function destroy(Request $request) { 
        /*en la vista habra un campo oculto que tendra el id de la receta
        atraves de este campo se envia al controllador para que este se encarge de 
        eliminar la receta con el id solicitado*/
        $id = Recipe::where('id', '=', $request->input('id'));

        if ($id != null) {
            $id->delete();//returna a la vista con un mensaje de aprovacion
            return back()->with(['message'=> 'Successfully deleted!!']);
        }//returna a la vista con un mensaje de error
        return back()->with(['message'=> 'Error,comuniquese con el administardor']);
    }
    public function getByCategoria(Request $request)
    {

        $recetas =  Recipe::where('categoria','LIKE','%'.$request->input('categoria'.'%') )->get();
        if ($recetas != null) {
            return $recetas ;//retorna un arreglo con todas las recetas que cumplen
            //con el nombre 
        }
        return back()->with(['message'=> 'No existe la categoria solicitada']);

    }
    public function getByNombre(Request $request)
    {

        $recetas =  Recipe::where('nombreReceta','LIKE','%'.$request->input('nombreReceta'.'%') )->get();
        if ($recetas != null) {
            return $recetas ;//retorna un arreglo con todas las recetas que cumplen
            //con el nombre solicitado
        }
        return back()->with(['message'=> 'No existe la receta solicitada']);

    }
    public function getByTiempo(Request $request)
    {

        $recetas =  Recipe::where('tiempo','=',$request->input('tiempo') )->get();
        if ($recetas != null) {
            return $recetas ;//retorna un arreglo con todas las recetas que cumplen
            //con el tiempo solicitado
        }
        return back()->with(['message'=> 'No existe la receta con el tiempo solicitado']);
    }

}
