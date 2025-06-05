package app.portfolio_backend.Beans;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ContactMessage {
    private String name;
    private String email;
    private String subject;
    private String message;

}
