import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getImagesResponse } from "@/types/getImagesResponse";

type Data = {
  location: string;
  thumbnail: string;
};

const webbGetter = async (
  _req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) => {
  const url = "https://api.jwstapi.com/all/type/jpg";

  const {
    data: { body },
  } = await axios.get<getImagesResponse>(url, {
    headers: {
      "X-API-KEY": `${process.env.JWST_KEY}`,
    },
  });

  const transformed_response = body.map(({ location, thumbnail }) => {
    return {
      location,
      thumbnail,
    };
  });

  res.status(200).send(transformed_response);
};

export default webbGetter;
