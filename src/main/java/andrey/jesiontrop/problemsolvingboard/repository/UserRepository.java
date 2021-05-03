package andrey.jesiontrop.problemsolvingboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import andrey.jesiontrop.problemsolvingboard.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
