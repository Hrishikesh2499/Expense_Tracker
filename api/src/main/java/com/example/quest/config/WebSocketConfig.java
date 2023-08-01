package com.example.quest.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.AbstractWebSocketMessageBrokerConfigurer;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig extends AbstractWebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic");
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
         registry.addEndpoint("/chat").setAllowedOriginPatterns("*").withSockJS();
    }
}

//  Working Model

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.socket.config.annotation.EnableWebSocket;
// import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
// import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

// import com.example.todoapp.controllers.SocketHandler;

// @Configuration
// @EnableWebSocket
// public class WebSocketConfig implements WebSocketConfigurer {
// 	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
// 		registry.addHandler(new SocketHandler(), "/ws").setAllowedOrigins(
//             "*"
//         );
// 	}
// }