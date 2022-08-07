import { AxiosResponse } from "axios";
import { ImagesTypes } from "../../models/ImagesTypes";
import { loremPicsumApi } from "../api";


const listImages = async (): Promise<ImagesTypes[]> => {
  const allImagesRequest: AxiosResponse<ImagesTypes[]> = await loremPicsumApi.get(
    "list?page=2&limit=5"
  );

  const resultAllImages = allImagesRequest.data;

  return resultAllImages;
};

export { listImages };
