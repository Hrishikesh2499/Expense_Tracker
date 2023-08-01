package com.example.quest.controllers;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.example.quest.Dto.MessageDto;

@Controller
public class WebsocketController {
    
    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public MessageDto send(MessageDto message) throws Exception {
        System.out.println(message.getMessage()+"Hello Called");
        return message;
    }


}
// Working Model

// import org.springframework.stereotype.Component;
// import org.springframework.web.socket.TextMessage;
// import org.springframework.web.socket.WebSocketSession;
// import org.springframework.web.socket.handler.TextWebSocketHandler;

// @Component
// public class SocketHandler extends TextWebSocketHandler {

// List<WebSocketSession> sessions = new ArrayList<WebSocketSession>();

// @Override
// public void handleTextMessage(WebSocketSession session, TextMessage message)
// throws InterruptedException, IOException {
// for (WebSocketSession webSocketSession : sessions) {;
// System.out.println(message.toString());
// webSocketSession.sendMessage(message);
// }
// }

// @Override
// public void afterConnectionEstablished(WebSocketSession session) throws
// Exception {
// // the messages will be broadcasted to all users.
// sessions.add(session);

// }

// }