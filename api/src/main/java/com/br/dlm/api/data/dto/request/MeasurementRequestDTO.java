package com.br.dlm.api.data.dto.request;

import com.br.dlm.api.data.entity.Pacient;
import jakarta.validation.constraints.NotNull;


public record MeasurementRequestDTO(

        @NotNull(message = "Height could not be empty")
        double height,

        @NotNull(message = "Weight could not be empty")
        double weight,

        Pacient pacient
) {
}
