import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    id: 1,
    name: "Orthopedics",
    description:
      "Medical field specializing in bones, joints, ligaments, and muscles, addressing injuries, diseases, and conditions through surgical and non-surgical interventions",
  },
  {
    id: 2,
    name: "Neurologists",
    description:
      "Medical specialist studying the nervous system, diagnosing and treating disorders affecting the brain, spinal cord, and peripheral nerves",
  },
  {
    id: 3,
    name: "Cardiologists",
    description:
      "Specialize in diagnosing and treating heart-related conditions, such as heart disease and cardiovascular disorders, using medical and interventional approaches",
  },
  {
    id: 4,
    name: "Physician",
    description:
      "Medical professionals who diagnose, treat, and prevent illnesses, providing comprehensive healthcare through various medical interventions and therapies",
  },
  {
    id: 5,
    name: "Dermatology",
    description:
      "Medical field focused on skin health, treating disorders, and enhancing appearance through diagnosis, prevention, and therapy",
  },
  {
    id: 6,
    name: "Psychiatrist",
    description:
      "Medical doctors who specialize in mental health, diagnosing and treating mental illnesses through therapy, medication, and other interventions",
  },
  {
    id: 7,
    name: "Allergist",
    description:
      "Specializes in diagnosing and treating allergies and immune system disorders to manage reactions to various substances and conditions",
  },
  {
    id: 8,
    name: "Dentist",
    description:
      "Focus on oral health, diagnosing and treating issues in teeth and gums, promoting preventive care, and enhancing overall dental well-being",
  },
  {
    id: 9,
    name: "Oncologists",
    description:
      "Specialize in diagnosing and treating cancer, employing various therapies such as chemotherapy, radiation, and surgery to manage and eradicate malignancies",
  },
];

function Services() {
  return (
    <div className="mt-2 grid-cols-3 gap-3 md:grid">
      {services.map((service) => {
        return (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
          />
        );
      })}
    </div>
  );
}

export default Services;
