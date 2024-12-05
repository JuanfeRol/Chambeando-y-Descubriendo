<?
    require_once '../vendor/autoload.php';

    use API\Read\Read;
    use API\Update\Update;
    
    $app = new Slim\App();

    $app->get('/list', function($request, $response, $args){
        $response = $response->withHeader('Content-Type', 'application/json; charset=utf-8'); //Para los acentos

        $products = new Read("ChambeandoDescubriendo");

        $products->list();

        $response->getBody()->write(json_encode($products->getData()));
    
        return $response;
    });


    $app->post('/edit', function($request, $response, $args){
        $response = $response->withHeader('Content-Type', 'application/json; charset=utf-8'); //Para los acentos

        $products = new Update("ChambeandoDescubriendo");

        $reqPost = $request->getParsedBody();

        if(isset($reqPost['id'])) {
            $products->edit($reqPost);
        }

        $response->getBody()->write(json_encode($products->getData()));
        return $response;
    });

    $app->get('/search', function($request, $response, $args){
        $response = $response->withHeader('Content-Type', 'application/json; charset=utf-8'); //Para los acentos

        $products = new Read("ChambeandoDescubriendo");

        $queryParams = $request->getQueryParams();

        if(isset($queryParams['search'])) {
            $products->search($queryParams['search']);
        }

        $response->getBody()->write(json_encode($products->getData()));
        return $response;
    });

    $app->post('/single', function($request, $response, $args){
        $response = $response->withHeader('Content-Type', 'application/json; charset=utf-8'); //Para los acentos

        $products = new Read("ChambeandoDescubriendo");

        $reqPost = $request->getParsedBody();

        if(isset($reqPost['id'])) {
            $products->single($reqPost['id']);
        }

        $response->getBody()->write(json_encode($products->getData()));
        return $response;
    });

    $app->post('/singleSearch', function($request, $response, $args){
        $response = $response->withHeader('Content-Type', 'application/json; charset=utf-8'); //Para los acentos

        $products = new Read("ChambeandoDescubriendo");

        $reqPost = $request->getParsedBody();

        if(isset($reqPost['nombre'])) {
            $products->singleByName($reqPost);
        }

        $response->getBody()->write(json_encode($products->getData()));
        return $response;
    });

    $app->run();
?>