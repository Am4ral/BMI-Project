package com.br.dlm.api.data.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "measurement")
public class Measurements {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_measurement")
    private Long idMeasurement;
}
