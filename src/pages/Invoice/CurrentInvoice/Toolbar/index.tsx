import React from "react";
import CardComponent from "../../../../components/CardComponent";
import SelectComponent from "src/components/SelectInput";

const Toolbar: React.FC = () => {
  return (
    <CardComponent cardClassName="px-3 d-flex gap-4" isMinHeight>
      <div>
        <SelectComponent
          name="paymentMethod"
          label="por método"
          isClearable
          placeholder="Ex.: Santander"
          options={[
            { value: "boleto", label: "Boleto" },
            { value: "santander", label: "Santander" },
            { value: "bradesco", label: "Bradesco" },
          ]}
        />
      </div>
      <div>
        <SelectComponent
          name="paymentMethod"
          label="por pessoa"
          placeholder="Ex.: Marina Borges"
          isClearable
          options={[
            { value: "boleto", label: "Boleto" },
            { value: "santander", label: "Santander" },
            { value: "bradesco", label: "Bradesco" },
          ]}
        />
      </div>
    </CardComponent>
  );
};

export default Toolbar;
