package app.portfolio_backend.Controllers;

import app.portfolio_backend.Beans.ContactMessage;
import app.portfolio_backend.Services.ContactService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@AllArgsConstructor
public class ContactController {

    private ContactService contactService;

    @PostMapping("/send")
    public void sendMessage(@RequestBody ContactMessage message) {
        contactService.sendMessage(message);
    }

}
