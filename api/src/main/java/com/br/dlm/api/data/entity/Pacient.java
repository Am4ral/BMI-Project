package com.br.dlm.api.data.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "pacient")
public class Pacient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_pacient")
    private Long idPacient;

}
