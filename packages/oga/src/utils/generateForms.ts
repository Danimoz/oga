
export function getMongooseFields(fields: any) {
  const fieldDetails = Object.keys(fields).map((fieldName) => {
    const field = fields[fieldName];
    
    const maxLength = field?.options?.maxLength;
    let fieldType: string;

    if (field?.instance === 'String' && maxLength) {
      fieldType = "textarea";
    } else {
      switch (field?.instance) {
        case "Number":
          fieldType = "number";
          break;
        case "Date":
          fieldType = "date";
          break;
        case "Boolean":
          fieldType = "checkbox";
          break;
        case "String":
          fieldType = fieldName.toLowerCase().includes("password") ? "password" 
            : fieldName.toLowerCase().includes("email") ? "email" 
            : fieldName.toLowerCase().includes("phone") ? "tel"
            : fieldName.toLowerCase().includes("url") ? "url"
            : fieldName.toLowerCase().includes("image") || fieldName.toLowerCase().includes('picture') ? "file"
            : "text";
          break;
        default:
          fieldType = "text";
      }
    }

    return {
      name: fieldName,
      type: fieldType,
      required: !!field?.isRequired,
    };
  });

  return fieldDetails.filter(field => !['_id', '__v'].includes(field.name));
}