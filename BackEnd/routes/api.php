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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//competencia
Route::get('Competencia','CompetenciasDP@index');
Route::get('Competencia/{id}','CompetenciasDP@getByNombre');
Route::post('Competencia','CompetenciasDP@store');
Route::put('Competencia/{id}','CompetenciasDP@update');
Route::delete('Competencia/{id}','CompetenciasDP@destroy');
//recetas
Route::get('Recetas','RecipeController@index');
Route::get('Competencia/{id}','RecipeController@getByCategoria');
Route::get('Competencia/{id}','RecipeController@getByNombre');
Route::get('Competencia/{id}','RecipeController@getByTiempo');
Route::post('Competencia','RecipeController@store');
Route::put('Competencia/{id}','RecipeController@update');
Route::delete('Competencia/{id}','RecipeController@destroy');