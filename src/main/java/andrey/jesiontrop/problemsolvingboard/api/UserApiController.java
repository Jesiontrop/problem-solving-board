package andrey.jesiontrop.problemsolvingboard.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import andrey.jesiontrop.problemsolvingboard.model.User;
import andrey.jesiontrop.problemsolvingboard.repository.UserRepository;
import andrey.jesiontrop.problemsolvingboard.security.RegistrationForm;
import lombok.extern.slf4j.Slf4j;

@RepositoryRestController
@CrossOrigin("*")
@Slf4j
public class UserApiController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserApiController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping(path="/users")
    @ResponseBody
    public ResponseEntity<User> registration(@RequestBody RegistrationForm form) {
        log.debug(form.toString());
        log.debug(form.toUser(passwordEncoder).toString());
        log.debug("registation");
        User user = userRepository.save(form.toUser(passwordEncoder));
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
}
