package app.portfolio_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class PortfolioBackendApplication {

    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(PortfolioBackendApplication.class, args);
    }

}
