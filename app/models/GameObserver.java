package models;

import play.mvc.WebSocket;
import play.mvc.WebSocket.Out;
import de.htwg.dog.controller.IController;
import de.htwg.dog.view.IView;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class GameObserver implements IView {

    private Out<String> out;
    private IController controller;

    public GameObserver(IController controller, WebSocket.Out<String> out) {
        controller.addUpdateListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                update();
            }
        });
        this.controller = controller;
        this.out = out;
    }

    @Override
    public void update() {
        out.write(controller.gameToJson());
    }
}
