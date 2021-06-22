import Java.util.*;

public class java-hello-html-world{

     public static void main(String []args){
        LocalDate currentdate = LocalDate.now();

        Date date = new Date(); // This object contains the current date value
        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");

        int currentDay = currentdate.getDayOfMonth();

        // dayofweek = "Monday/Tuesday/etc"
        DayOfWeek dayOfWeek = LocalDate.now().getDayOfWeek();

        // month = "july/august/etc"
        Month currentMonth = currentdate.getMonth();


        //System.out.println(formatter.format(date));

        // output of data = dayofWeek currMonth militaryTime currYear
        System.out.println("This program was generated at: "+dayofWeek+" "+currentMonth+" "+currentDay)
    }
}

