import { useNavigate } from "react-router-dom";
import { MainLayout } from "../../layouts/screens/MainLayout";

export function RegisterExperiment() {
    const navigate = useNavigate();

    return (
        <MainLayout>
            <div className="bg-gray-50 h-full w-full flex justify-center items-center">
                <button onClick={() => navigate("../register-experiment-form")} className="border-2 bg-blue-700 text-white rounded-lg">
                    START
                </button>
            </div>
        </MainLayout>
    );
};