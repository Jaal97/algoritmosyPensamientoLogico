class Main 
{
  public static void mostrarSubtexto(String text, int start, int end)
  {
    System.out.println(text.substring(start, end));
  }
  public static void main(String[] arg)
  {
    String text = "Lasfloresrojas";
    mostrarSubtexto(text, 3, 9);

  }
}