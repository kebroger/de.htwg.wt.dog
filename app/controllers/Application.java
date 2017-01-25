package controllers;

import models.GameObserver;
import play.*;
import play.mvc.*;

import views.html.*;

import de.htwg.dog.controller.IController;
import de.htwg.dog.Dog;

public class Application extends Controller {
    static IController controller = Dog.getInstance().getController();

    static String userMail = "";

    // Angular index
    public static Result index() {
        return ok(indexAngular.render(controller));
    }

    public static Result rules() {
        return ok(rules.render(controller));
    }

    public static Result game() {
        return ok(index.render(userMail, controller));
    }

    public static Result signIn(String mail, String password) {
        userMail = password;
        return game();
    }

    public static Result commandline(String command) {
        Dog.getInstance().getTui().processInput(command);
        return game();
    }

    public static Result jsonCommand(String command) {
        Dog.getInstance().getTui().processInput(command);
        return ok(controller.gameToJson());
    }

    public static Result getJson() {
        return ok(controller.gameToJson());
    }

    public static WebSocket<String> connectWebSocket() {
        return new WebSocket<String>() {

            public void onReady(WebSocket.In<String> in, WebSocket.Out<String> out) {

                new GameObserver(controller, out);
            }

        };
    }
}
