package com.br.dlm.api.data.dto.request;

import com.br.dlm.api.data.entity.Pacient;
import jakarta.validation.constraints.NotBlank;


public record MeasurementRequestDTO(

        @NotBlank(message = "Height could not be empty")
        Double height,

        @NotBlank(message = "Weight could not be empty")
        Double weight,

        @NotBlank(message = "BMI could not be empty")
        Double bmi,

        Pacient pacient
) {
}
