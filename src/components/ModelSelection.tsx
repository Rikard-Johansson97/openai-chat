import React, { FC } from "react";
import Select from "react-select";
import useSWR from "swr";

interface ModelSelectionProps {}

const ModelSelection: FC<ModelSelectionProps> = ({}) => {
  const fetchModels = () => fetch("/api/getEngines");

  const { data: models, isLoading } = useSWR("models", fetchModels);
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  return (
    <div>
      <Select
        options={models?.modelOptions}
        className='mt-2'
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
      />
    </div>
  );
};

export default ModelSelection;
