package andrey.jesiontrop.problemsolvingboard.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "informants")
public class Informant {

    @Id
    @SequenceGenerator(name = "informants_id_seq",
            sequenceName = "informants_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
                    generator = "informants_id_seq")
    private Long id;

    private String fullname;
    private String position;

    public Informant(String fullname, String position) {
        this.fullname = fullname;
        this.position = position;
    }
}
