package andrey.jesiontrop.problemsolvingboard.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "responsible")
public class Responsible {

    @Id
    @SequenceGenerator(name = "responsible_id_seq",
            sequenceName = "responsible_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
                    generator = "responsible_id_seq")
    private Long id;

    @OneToOne(targetEntity = User.class)
    private Long userId;
}
