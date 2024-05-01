package com.br.dlm.api.controller;

import com.br.dlm.api.data.dto.request.MeasurementRequestDTO;
import com.br.dlm.api.data.dto.response.MeasurementResponseDTO;
import com.br.dlm.api.service.MeasurementService;
import com.br.dlm.api.util.MediaType;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/measurement")
@Tag(name = "Measurement", description = "Endpoints relacionados à área de medição de dados")
public class MeasurementController {

    @Autowired
    private MeasurementService measurementService;

    @Operation(summary = "Resgata uma medição pelo ID",
            description = "Resgata uma medição pelo ID informado na URL",
            tags = {"Measurement"},
            responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                            content = @Content(schema = @Schema(implementation = MeasurementResponseDTO.class))
                    ),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    @GetMapping(value = "/getById/{id}",
            produces = MediaType.APPLICATION_JSON)
    public ResponseEntity<MeasurementResponseDTO> getById(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(measurementService.findById(id));
    }

    @Operation(summary = "Resgata todas as medições",
            description = "Resgata todas as medições cadastradas no banco de dados",
            tags = {"Measurement"},
            responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                            content = @Content(schema = @Schema(implementation = MeasurementResponseDTO.class))
                    ),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    @GetMapping(value = "/getAll",
            produces = MediaType.APPLICATION_JSON)
    public ResponseEntity<List<MeasurementResponseDTO>> getAll() {
        return ResponseEntity.status(HttpStatus.OK).body(measurementService.getAllMeasurements());
    }

    @Operation(summary = "Cria uma nova medição",
            description = "Cria uma nova medição no banco de dados",
            tags = {"Measurement"},
            responses = {
                    @ApiResponse(description = "Created", responseCode = "201",
                            content = @Content(schema = @Schema(implementation = MeasurementResponseDTO.class))
                    ),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    @PostMapping(value = "/create",
            produces = MediaType.APPLICATION_JSON,
            consumes = MediaType.APPLICATION_JSON)
    public ResponseEntity<MeasurementResponseDTO> create(@Valid @RequestBody MeasurementRequestDTO measurementRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(measurementService.createMeasurement(measurementRequestDTO));
    }

    @Operation(summary = "Atualiza uma medição",
            description = "Atualiza uma medição no banco de dados",
            tags = {"Measurement"},
            responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                            content = @Content(schema = @Schema(implementation = MeasurementResponseDTO.class))
                    ),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    @PutMapping(value = "/update/{id}",
            produces = MediaType.APPLICATION_JSON,
            consumes = MediaType.APPLICATION_JSON)
    public ResponseEntity<MeasurementResponseDTO> update(@PathVariable Long idMeasurement, @Valid @RequestBody MeasurementRequestDTO measurementRequestDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(measurementService.updateMeasurement(idMeasurement, measurementRequestDTO));
    }

    @Operation(summary = "Deleta uma medição",
            description = "Deleta uma medição no banco de dados",
            tags = {"Measurement"},
            responses = {
                    @ApiResponse(description = "Success", responseCode = "200",
                            content = @Content(schema = @Schema(implementation = String.class))
                    ),
                    @ApiResponse(description = "Bad Request", responseCode = "400", content = @Content),
                    @ApiResponse(description = "Unauthorized", responseCode = "401", content = @Content),
                    @ApiResponse(description = "Internal Error", responseCode = "500", content = @Content),
            }
    )
    @DeleteMapping(value = "/delete/{id}", produces = MediaType.TEXT_PLAIN)
    public ResponseEntity<String> delete(@PathVariable Long idMeasurement) {
        return ResponseEntity.status(HttpStatus.OK).body(measurementService.deleteMeasurement(idMeasurement));
    }
}
