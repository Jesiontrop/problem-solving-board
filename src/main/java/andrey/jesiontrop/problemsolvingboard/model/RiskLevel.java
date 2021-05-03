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
@Table(name = "risk_levels")
public class RiskLevel {

    @Id
    @SequenceGenerator(name = "risk_levels_id_seq",
            sequenceName = "risk_levels_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
                    generator = "risk_levels_id_seq")
    private Long id;

    private String name;
}
