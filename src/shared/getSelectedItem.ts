import { ControlDataSource } from "../types";

export default function getItem(dataSource: ControlDataSource, id: string) {

       let item = dataSource.data.find(x => dataSource.idSelector(x) == id);

       if (!item && dataSource.data.length > 0) {
              return dataSource.data[0];
       }

       return item;
}