import { ExperimentInformation } from "../../forms/experiment/ExperimentInformation";
import { ExperimentPlanning } from "../../forms/experiment/ExperimentPlanning";
import { ExecutionSelection } from "../../forms/experiment/Execution";
import { Analysis } from "../../forms/experiment/Analysis";
import { Discussion } from "../../forms/experiment/Discussion";
import { Evaluation } from "../../forms/experiment/Evaluation";
import { Documentation } from "../../forms/experiment/Documentation";
import { Acknowledgements } from "../../forms/experiment/Acknowledgements";
import { Appendices } from "../../forms/experiment/Appendices";
import { ConclusionsFutureWork } from "../../forms/experiment/ConclusionsFutureWork";
import { References } from "../../forms/experiment/References";
import { Package } from "../../forms/experiment/Package";

import { PrintForm } from "./printForm";

import { useFormContext } from "../../hooks/useFormContext";

export function RenderExperimentForm() {

    const { currentForm } = useFormContext()

    switch(currentForm) {
        case 1: return <ExperimentInformation />
        case 2: return <ExperimentPlanning />
        case 3: return <ExecutionSelection />
        case 4: return <Analysis />
        case 5: return <Discussion />
        case 6: return <Evaluation />
        case 7: return <Documentation />
        case 8: return <Acknowledgements />
        case 9: return <Appendices />
        case 10: return <ConclusionsFutureWork />
        case 11: return <References />
        case 12: return <Package />
        case 13: return <PrintForm />
    }
}