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
@Table(name = "positions")
public class Position {

    @Id
    @SequenceGenerator(name = "positions_id_seq",
            sequenceName = "positions_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
                    generator = "positions_id_seq")
    private Long id;
}
