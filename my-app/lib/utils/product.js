export const prepareVariantsWithOptions = (product) => {
  return product.variants.map((variant) => {
    const optionsDictionary = variant.option_value_ids?.reduce(
      (optionValues, optionId) => {
        product.options.find((option) => {
          const matchingOptionValue = option.values.find((value) => {
            return value.id === optionId;
          });
          if (matchingOptionValue) {
            optionValues[`${option?.name?.toLowerCase()}`] =
              matchingOptionValue?.name;
          }
        });
        return optionValues;
      },
      {}
    );
    return {
      ...optionsDictionary,
      ...variant,
    };
  });
};

export const getPrice = (price, currency) =>
  Intl.NumberFormat(undefined, {
    currency,
    minimumFractionDigits: 2,
    style: "currency",
  }).format(parseFloat(price ? price + "" : "0"));

export const prepareVariantsImages = (variants, optionKey) => {
  const imageDictionary = variants.reduce((images, variant) => {
    if (variant[optionKey] && variant.images) {
      images[variant[optionKey]] = variant.images[0].file.url;
    }
    return images;
  }, {});

  const images = Object.keys(imageDictionary).map((key) => {
    return {
      [optionKey]: key,
      src: imageDictionary[key] ?? "https://via.placeholder.com/1050x1050",
    };
  });

  return images;
};
