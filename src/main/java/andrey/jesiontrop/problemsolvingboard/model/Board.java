package andrey.jesiontrop.problemsolvingboard.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "board")
public class Board {

    @Id
    @SequenceGenerator(name = "board_id_seq",
            sequenceName = "board_id_seq",
            allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,
            generator = "board_id_seq")
    private Long id;

    private Date registrationDate;

    @ManyToOne(targetEntity = Area.class)
    @JoinColumn(name = "area_id")
    private Area area;

    @Lob
    private String problem;

    @ManyToOne(targetEntity = RiskLevel.class)
    @JoinColumn(name = "risk_level_id")
    private RiskLevel riskLevel;

    @Lob
    private String proposedSolution;

    @ManyToOne(targetEntity = Responsible.class)
    @JoinColumn(name = "responsible_id")
    private Responsible responsible;

    private Date plannedDate;
    private Date actualDate;

    @ManyToOne(targetEntity = SolvingLevel.class)
    @JoinColumn(name = "solving_level_id")
    private SolvingLevel solvingLevel;

    @ManyToOne(targetEntity = ResolutionStatus.class)
    @JoinColumn(name = "resolution_status_id")
    private ResolutionStatus resolutionStatus;

    @ManyToOne(targetEntity = FmResponsible.class)
    @JoinColumn(name = "fm_responsible_id")
    private FmResponsible fmResponsible;

    private String reasonForRefusal;

    @ManyToOne(targetEntity = Informant.class)
    @JoinColumn(name = "informant_id")
    private Informant informant;

    @PrePersist
    void registrationDate() {
        this.registrationDate = new Date();
    }

    public Board(Area area, String problem, RiskLevel riskLevelId, String proposedSolution) {
        this.area = area;
        this.problem = problem;
        this.riskLevel = riskLevelId;
        if (proposedSolution != null) {
            this.proposedSolution = proposedSolution;
        }
    }
}
