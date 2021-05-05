package andrey.jesiontrop.problemsolvingboard.security;

import org.springframework.security.crypto.password.PasswordEncoder;
import andrey.jesiontrop.problemsolvingboard.model.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RegistrationForm {
    private String username;
    private String email;
    private String position;
    private String password;

    public User toUser(PasswordEncoder passwordEncoder) {
        return new User(
            username,
            email,
            position,
            passwordEncoder.encode(password)
        );
    }
}
