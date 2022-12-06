import { FormProvider } from "@form";
import AlertMsg from "components/AlertMsg";
import { useForm } from "react-hook-form";
import useFilterBrands from "../hooks/useFilterBrands";
import { useQueryBrands } from "../services/brand.query";
import brandStore from "../store/brandStore";
import BrandChild from "./BrandChild";
import FRadioGroupCustom from "./form/FRadioGroupCustom";
import SkelentonBrandCard from "./ui/Skelenton";

const defaultValues = {
  brand: "",
};

function BrandList() {
  const { isLoading } = useQueryBrands();
  const { limit } = brandStore();
  const numSkeleton = Array.from(Array(limit).keys());

  const { brands } = useFilterBrands();

  const methods = useForm({ defaultValues, mode: "onChange" });
  const { handleSubmit, watch } = methods;

  const selectedId = watch("brand");

  const onSubmit = (data) => {
    // setFilters(data);
  };

  if (brands.length < 0) {
    return <AlertMsg />;
  }

  if (isLoading) {
    return (
      <>
        {numSkeleton.map((idx) => (
          <SkelentonBrandCard key={idx + 1} />
        ))}
      </>
    );
  }

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <FRadioGroupCustom name="brand">
          {brands.map((brand, idx) => (
            <BrandChild
              idx={idx}
              brand={brand}
              key={brand.id}
              selectedId={selectedId}
            />
          ))}
        </FRadioGroupCustom>
      </FormProvider>
    </>
  );
}

export default BrandList;
