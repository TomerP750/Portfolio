package app.portfolio_backend.Services;

import app.portfolio_backend.Beans.ContactMessage;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ContactService {

    private final JavaMailSender mailSender;
    public void sendMessage(ContactMessage dto) {
//        SimpleMailMessage msg = new SimpleMailMessage();
//        msg.setTo();
//        msg.setSubject(dto.getSubject() + "\n");
//        msg.setText(dto.getMessage());
//        mailSender.send(msg);
    }

}
