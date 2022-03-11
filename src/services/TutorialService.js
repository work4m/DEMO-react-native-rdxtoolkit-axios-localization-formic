import http from "./../utils/http-common";
import RequestTypes from './../common/RequestTypes';

const getAll = () => {
  return http({ url: "/tutorials", type: RequestTypes.GET });
};

const TutorialService = {
  getAll
};

export default TutorialService;