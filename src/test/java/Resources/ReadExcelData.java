package Resources;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
 
import io.cucumber.java.an.E;

public class ReadExcelData {

	static File file;
	static FileInputStream fis;
	static XSSFWorkbook wb;
	static Sheet sh;
	static int rowCount;
	static ArrayList<String> suggestedTitle = new ArrayList<String>();
	static ArrayList<String> skudetails = new ArrayList<String>();
	public static ArrayList<String> excelHeader = null;
	static String filepath = "C:\\Users\\JJPL-212\\eclipse-workspace\\New\\Cucumber-Tests\\src\\test\\java\\Resources\\HariBol.xlsx";

	public static void main(String[] args) throws IOException {
		ReadExcelData.readExceldata();
//		ReadExcelData.readSkuDetails();
//		ReadExcelData.readSugestedTitle();
//		ReadExcelData.printExcelData();
		ReadExcelData.allExcelData();
	}

	public static void readExceldata() throws IOException {

		file = new File(filepath);
		fis = new FileInputStream(file);
		wb = new XSSFWorkbook(fis);
		sh = wb.getSheet("ProductDetails");
		rowCount = sh.getLastRowNum() - sh.getFirstRowNum();
//		// System.out.println(rowCount);
//		Row row = sh.getRow(0);
//		String cell = row.getCell(1).getStringCellValue();
//		// System.out.println(cell);
	}

	public static void readSkuDetails() throws IOException {
		// ReadExcelData.readExceldata(filepath);
		// skudetails = new ArrayList<String>();
		Row row0 = sh.getRow(0);
		Cell value = row0.getCell(1);

		// System.out.println(value);
		if (value.getStringCellValue().equals("Sku")) {
			for (int i = 0; i < rowCount; i++) {
				Row rows = sh.getRow(i);
				skudetails.add(rows.getCell(1).getStringCellValue());
			}
			System.out.println(skudetails);
		} else if (value.getStringCellValue().equals("SuggestedTitle")) {
			for (int i = 0; i < rowCount; i++) {
				Row row = sh.getRow(i);
				suggestedTitle.add(row.getCell(2).getStringCellValue());
			}
			// System.out.println(suggestedTitle);
		}

	}

	public static void readSugestedTitle() throws IOException {
		// ReadExcelData.readExceldata(filepath);
		// suggestedTitle = new ArrayList<String>();
		Row row0 = sh.getRow(0);
		Cell value = row0.getCell(2);
		if (value.getStringCellValue().equals("SuggestedTitle")) {
			for (int i = 0; i < rowCount; i++) {
				Row row = sh.getRow(i);
				suggestedTitle.add(row.getCell(2).getStringCellValue());
			}
			// System.out.println(suggestedTitle);
		}
	}

	public static void printExcelData() throws IOException {
		int skuSize = skudetails.size();
		int suggestSize = suggestedTitle.size();
		if (skuSize == suggestSize) {
			for (int i = 0; i < skudetails.size(); i++) {
				System.out.println(skudetails.get(i));
				System.out.print(suggestedTitle.get(i));

			}

		} else {
			System.out.println("size is not same");
		}

	}

	public static void allExcelData() {

	    excelHeader = new ArrayList<String>();
		Row row0 = sh.getRow(0);
		int ib = 0;
		while (row0.getCell(ib) != null) {
			excelHeader.add(row0.getCell(ib).getStringCellValue());
			ib++;
		}
		for (int i = 0; i < excelHeader.size(); i++) {
			 
			for (int j = 1; j < rowCount; j++) {
				
				Row row = sh.getRow(j);
				skudetails.add(row.getCell(i).getStringCellValue());
				if (excelHeader.get(i).equals("sku")) {

					skudetails.add(row.getCell(i).getStringCellValue());

				}

				else if (excelHeader.get(i).equals("SuggestedTitle")) {
					suggestedTitle.add(row.getCell(i).getStringCellValue());
				}
			}
		}

	}
}
