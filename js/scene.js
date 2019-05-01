 var canvas = document.getElementById("renderCanvas");

        var createScene = function () {
            var scene = new BABYLON.Scene(engine);
        
            //Створення світла
            var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);
        
            //Створення камери
            var camera = new BABYLON.ArcRotateCamera("Camera", 1.3, 1, 15, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, false);

        

        
            // Імпорт об'єкту холодильника
            BABYLON.SceneLoader.ImportMesh("", "scenes/", "new.babylon", scene, function (newMeshes) {

              dverkaholod = newMeshes[0];
              dverkamoroz = newMeshes[1];
              
                // Встановлення камери за першим об'єктом
                camera.target = newMeshes[0];

  

            });
 


            // Рух світла за камерою
            scene.registerBeforeRender(function () {
                light.position = camera.position;
            });
        
            return scene;
        }
        
        var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
        var scene = createScene();

        engine.runRenderLoop(function () {
            if (scene) {
                scene.render();
            }
        });



        // Зміна розміру 
        window.addEventListener("resize", function () {
            engine.resize();
        });



      //Функція для відкритя і закриття дверки холодилька
        function holod() {
    var n = document.getElementById("open-close");
    if (n.value == "Закрити"){
        n.value  = "Відкрити";
        dverkaholod.rotate(BABYLON.Axis.Y,9.7,BABYLON.Space.WORLD);
    }
    else{
        n.value  = "Закрити";
        dverkaholod.rotate(BABYLON.Axis.Y, -9.7, BABYLON.Space.WORLD);
    }

}

//Функція для відкритя і закриття дверки морозильної камери
function moroz() {
    var el = document.getElementById("opeclose");
    if (el.value === "Закрити"){
        el.value  = "Відкрити";
        dverkamoroz.rotate(BABYLON.Axis.Y,9.7,BABYLON.Space.WORLD);
    }
    else{
        el.value  = "Закрити";
        dverkamoroz.rotate(BABYLON.Axis.Y, -9.7, BABYLON.Space.WORLD);
    }
}
