package Resources;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.codoid.products.exception.FilloException;
import com.codoid.products.fillo.Connection;
import com.codoid.products.fillo.Fillo;
import com.codoid.products.fillo.Recordset;

public class ExcelData {
	public static void main(String[] args) throws FilloException {
		
		
		// ExcelData.readData();
		ExcelData.readExcelApi(
				"C:\\Users\\JJPL-212\\eclipse-workspace\\New\\Cucumber-Tests\\src\\test\\java\\Resources\\HariBol.xlsx");
	}

	//
	public static void readData() throws FilloException {
		String filepath = System.getProperty("user.dir");
		Fillo fillo = new Fillo();
		Connection connection = fillo.getConnection(filepath + "\\src\\test\\java\\Resources\\HariBol.xlsx");

		String strSelectQuerry = "Select * from  Sheet2";
		Recordset rs = connection.executeQuery(strSelectQuerry);

		while (rs.next()) {

		}

	}

	public static void readExcelApi(String filepath) {
		try {
			File file = new File(filepath);
			FileInputStream fis = new FileInputStream(file);
			XSSFWorkbook wb = new XSSFWorkbook(fis);
			Sheet sh = wb.getSheet("ProductDetails");
			int rowCount = sh.getLastRowNum();
			Row row = sh.getRow(0);
			Cell cell = row.getCell(0);
			int cellCount = row.getLastCellNum();
			for(int k=0;k<rowCount;k++) {
				Row rows = sh.getRow(k);
			String Data=	rows.getCell(1).getStringCellValue();
			System.out.println("Data of the give Colum is ="+Data);
			}

			for (int i = 0; i < rowCount; i++) {

				row = sh.getRow(i); 

				for (int j = 0; j < cellCount; j++) {
					cell = row.getCell(j);
 
					System.out.println(cell);
				}
			}

		} catch (Exception e) {
			System.out.println("Test");
		}

	}
}
