
package com.example.quest.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.service.*;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
    @Bean
    public Docket productApiSwagger2() {
        return new Docket(DocumentationType.SWAGGER_2).select()
                .apis(RequestHandlerSelectors.any()).build()
                .apiInfo(apiInfo());
    }

   

    // Describe the apis
    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("SopranoAPI")
                .description("This is Todo-app REST Api")
                .version("1.0.0")
                .build();
    }
}
