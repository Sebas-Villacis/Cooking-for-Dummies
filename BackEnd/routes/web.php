<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('Recetas','RecipeController@index');
Route::get('RecetasByCategoria/{buscar}','RecipeController@getByCategoria');
Route::get('RecetasByNombre','RecipeController@getByNombre');
Route::get('RecetasByTiempo','RecipeController@getByTiempo');
Route::post('guardarRecetas','RecipeController@store');
Route::put('actulizarRecetas','RecipeController@update');
Route::delete('eliminarRecetas','RecipeController@destroy');
Route::get('RecetasImagenes','RecipeController@getImages');