<div id="mainbody">

<div style="float:left;" class="header1">PANTHER Help</div>

<div style="float:right;" class="product">Still have questions? [Contact us.](/feedback.jsp)</div>

<div style="float:left;">**New - [PANTHER 9.0 User Manual](/help/PANTHER_user_manual.pdf)**</div>

<div style="float:left;">**[PANTHER 7.0 tutorial presentation](/help/PANTHER_Tutorial_2011.pdf) given at the 2011 ICSB Tutorial.**</div>

<div style="float:left;" class="header1">What can I do on the PANTHER site?</div>

The PANTHER site has comprehensive function information about genes, and was designed to also facilitate analysis of large numbers of genes. For a more information about the data relationships, visit the "PANTHER Data Overview" figure. Tools and data on the PANTHER site can be used to:

*   Get information about a gene of interest ([section I](#I.)).
*   Explore protein families, molecular functions, biological processes, cellular components and pathways ([section II](#II.)).
*   Generate lists of genes that belong to a given protein family or subfamily, have a given molecular function or participate in a given biological process or pathway, e.g. generate a candidate gene list for a disease ([section III](#III.)).
*   Analyze lists of genes, proteins or transcripts according to categories based on family, molecular function, biological process, cellular component or pathway, e.g. analyze mRNA microarray data ([section IV](#IV.)).

<span class="linesep">![](/images/spacer.gif)</span>  
<span class="header1">Contents</span>  

[I. Get information about a gene of interest.](#I.)  

[I.A. Search by keyword.](#I.A.)

[I.B. Search by sequence.](#I.B.)

[I.C. Gene page information: gene phylogeny, functions, orthologs.](#I.C.)

[II. Explore protein families, molecular functions, biological processes, and pathways.](#II.)  

[II.A. Get information about a protein family or subfamily, and/or view a protein family phylogenetic tree and multiple sequence alignment](#II.A.)

[II.B. Browse the different classifications.](#II.B.)

[II.C. Explore pathways and the genes and proteins that participate in them.](#II.C.)

[III. Generate a list of genes in PANTHER.](#III.)  

[III.A. Create a list of genes with a given ontology association (molecular function, biological process, cellular component, pathway).](#III.A.)

[III.B. Create a list of genes from a given family.](#III.B.)

[III.C. Create a list of genes in a genomic region.](#III.C.)

[III.D. Upload a list of IDs to the PANTHER site.](#III.D.)

[IV. Analyze gene lists by function.](#IV.)  

[IV.A. Visualize a list of genes as a “pie chart” broken down by gene function.](#IV.A.)

[IV.B. Analyze a list of genes in terms of statistically over- and -under-represented functions.](#IV.B.)

[IV.C. Analyze a list of gene-value pairs.](#IV.C.)

[V. Web Services.](#V.)  

[V.A. Search for orthologs](#V.A.)

[V.B. Keyword Search count](#V.B.)

[V.C. Keyword Search list](#V.C.)

[V.D. Search for supported organisms](#V.D.)

[V.E. Over-representation test](#V.E.)

[VI. Helpful Tips.](#VI.)  

[VI.A. Converting a list to another list type.](#VI.A.)

[VI.B. Saving a list to your workspace.](#VI.B.)

[VI.C. Exporting a list.](#VI.C.)

[VI.D. Using the pie chart view.](#VI.D.)

<span class="linesep">![](/images/spacer.gif)</span>  
<span class="header1"><a name="I.">Section I. Get information about a gene of interest.</a></span>  

<a name="I.A."><u>I.A. Search by keyword.</u></a>

1.  Enter a search term in the keyword search box, and press the “Go” button (or press “Return” on your keyboard).
2.  The results page will display the number of records matching your keyword. Click on the number to view all the genes. If the number is too large, you can filter the results by (1) selecting only those species of interest by clicking on the checkboxes on the results page or (2) click on “Refineâ€¦” next to the number of genes to refine the search using other criteria.
3.  Click on the gene identifier (first column of gene list) to view the gene details page.

<u><a name="I.B.">I.B. Search by sequence.</a></u>

1.  Enter a protein sequence in the Sequence Search box, and press the “Submit“ button.
2.  This will search against a library of family and subfamily HMMs, and bring up the subfamily that best matches your query sequence.
3.  You can click on the subfamily name to view details about the subfamily, such as the genes assigned to the subfamily, and links to view the subfamily within the larger family tree.

<u><a name="I.C.">I.C. Gene information.</a></u>

1.  Each protein-coding gene in PANTHER is also represented by a “representative“ protein sequence. This is the “canonical“ sequence whenever one is available, and substantial effort was given to select the best representative. The protein sequences are used to estimate phylogenetic trees.
2.  Each gene is classified by its:
    *   family. Click on the tree icon to see the gene in its phylogenetic context
    *   GO molecular function, biological process, cellular component
    *   PANTHER protein class
    *   pathways. Click on the pathway link to view the pathway.
3.  Orthologs of the gene in other species, as well as paralogs of the gene in the same species, are listed on the page. Note that only those genes appearing in the same phylogenetic tree are listed.

<span class="linesep">![](/images/spacer.gif)</span>  
<span class="header1"><a name="II.">Section II. Explore protein families, molecular functions, biological processes, and pathways.</a></span>  

<u><a name="II.A.">II.A. Get information about a protein family or subfamily, and/or view a protein family phylogenetic tree and multiple sequence alignment.</a></u>

1.  Click on the “Trees and HMMs” menu item, and click on the “Search for PANTHER families, trees and HMMs”.
2.  Type search terms in the text box, and press the “Search” button. Alternatively, you can search for PANTHER families via PANTHER ontology terms. After selecting the functions you are interested in (as outlined below in I.B), select “PANTHER Families” in the box below the “Get Results” button and press the button.
3.  You will get a list of PANTHER families and subfamilies that matched the query.
4.  Clicking on a family or subfamily identifier in the list will bring up the page for that family or subfamily, and that page contains links to the phylogenetic tree and multiple sequence alignment.

<u><a name="II.B.">II.B. Browse the different classifications.</a></u>

1.  Click on the “Browse” menu item.
2.  Select the ontology you are interested in (left panel). Typing in the text field will filter the list of possible selections. Click on a “+” to expand a category to view subcategories, and select categories by clicking on the checkbox next to the name. Brief details about each category can be seen by mousing-over a name, or full details by clicking on the icon to the left of a name. For pathways, full details include a detailed diagram of the molecular interactions and reactions in the pathway.
3.  Selections can be made in more than one ontology. When multiple selections are made, it means that results will meet the criteria from all the selections. For example, one could select “Mouse” from the species ontology as well as “Receptor” from the molecular function ontology to retrieve all receptors in the mouse genome.
4.  Review your selections in the Selection Summary panel.
5.  Human curators have associated ontology terms with PANTHER families, subfamilies and “training sequences.” To see these associations, select “PANTHER Families” in the right panel and press the orange “Get Results” button. Alternatively, you can also see the genes (in the selected species) that were hit by one of the family or subfamily HMMs by pressing the results button after selecting “Genes.”

<u><a name="II.C.">II.C. Explore pathways and the genes and proteins that participate in them.</a></u>

1.  Retrieve a list of pathways using either the text search, or by browsing the list of available pathways in the Prowler [(I.B.)](#II.B.)
2.  View the detailed information about a pathway by clicking on the pathway name or ID link in the pathway list, or by clicking on the icon to the left of the pathway name in the Prowler.
3.  Select the “Pathway diagram” tab on the Pathway Details page to view the interactive applet diagram. This diagram may take a few moments to load, especially for larger pathways.
4.  Pathway “molecule classes” (genes, mRNA, protein, small molecules) can be selected by clicking on them in the diagram, or by selecting them from the folder to the left of the diagram.
5.  Genes assigned to the selected molecule classes can be retrieved by pressing the “Go” button at the top right of the pathway diagram.
6.  Right-clicking on a pathway component allows a number of powerful features, such as highlighting all up- or downstream components, or displaying detailed information about a component.

<span class="linesep">![](/images/spacer.gif)</span>  
<span class="header1"><a name="III.">Section III. Generate a list of genes in PANTHER.</a></span>  

The PANTHER site was constructed to allow simple but powerful operations on a list of genes, proteins or transcripts. You can get to a PANTHER list view using a PANTHER search or browse, or by importing a list to the site. Once in the list view, a number of operations can be performed on the list. These operations are:

1.  Viewing the list graphically as a pie or bar chart of gene functions. Click on the pie chart icon at the top of a list.
2.  Saving a list to the Workspace. Choose “workspace” from the “Send list to” drop-down menu at the top of a list.
3.  Exporting a list as a tab-delimited file. Choose “file” from the “Send list to” drop-down menu at the top of a list.
4.  Sorting the list, e.g. to help find candidate genes. You can sort by protein family (click on the “PANTHER best hit” column header), molecular function (click on the “molecular function” column header) or biological process (click on the “biological process” column header) etc.
5.  Filtering the list to select only those entries with given search terms. Click on “refine search” at the top of a list.
6.  Converting the list to a different data type, e.g. convert a protein list to a list of all the genes that encode those proteins. Choose the new data type, from the “Convert list to” drop-down menu.

<u><a name="III.A.">III.A. Create a list of genes from a given class (molecular function, biological process, cellular component, protein class pathway).</a></u>

1.  Click on the “Browse” menu item.
2.  Select the ontology you are interested in (left panel). Typing in the text field will filter the list of possible selections. Click on a “+” to expand a category to view subcategories, and select categories by clicking on the checkbox next to the name. Brief details about each category can be seen by mousing-over a name, or full details by clicking on the icon to the left of a name.
3.  Selections can be made in more than one ontology. For example, one could select “Mouse” from the species ontology as well as “Receptor” from the molecular function ontology to retrieve all receptors in the mouse genome.
4.  Press the orange “Get Results” button to retrieve genes by default (other result types can be selected first). Select the genome dataset genome(s) you want to search.

<u><a name="III.B.">III.B. Create a list of genes from a given family.</a></u>

1.  Click on the “Trees and HMMs” menu item.
2.  Type search terms in the text box, and press the “Go” button. Alternatively, you can search for PANTHER families via PANTHER ontology terms. After selecting the functions you are interested in (as outlined above in I.A.), select “PANTHER Families” in the box below the “Get Results” button and press the button.
3.  You will get a list of PANTHER families and subfamilies that matched the query.
4.  Families and subfamilies of interest can be selected by clicking on the checkbox next to the ID. If no selections are made, all families and subfamilies are assumed to be selected.
5.  Convert the list to a list of genes in the selected families/subfamilies by choosing “genes” from the “Convert list to:” drop-down menu.

<u><a name="III.C.">III.C. Create a list of genes in a genomic region.</a></u>

1.  Click on “Genomes” and then click on the “Location Search” link.
2.  Choose genome assembly.
3.  To select the genomic region of interest, enter in the chromosomal coordinates, or the markers in the region of interest.
4.  Set flanking region (the number of bases outside of the genomic region of interest) if desired. Press the “search” button.
5.  A list of genes will appear that match the genomic region.

<u><a name="III.D.">III.D. Upload a list of IDs to the PANTHER site.</a></u>

1.  Go to the “batch upload” page. You can access this page from the home page, from the “Genomes” page, or from the Workspace by selecting the “new list” link.
2.  Each ID in your list of IDs should be separated by either a space, comma or carriage return character.
3.  We recommend that you select the type of ID for a more precise lookup (select this under “select Upload ID type” under Step 2 on the upload page). For genes, preferred IDs are Entrez Gene identifiers for public genes, Celera hCG identifiers for Celera genes.
4.  You can select different types of objects to return (genes, transcripts, proteins) that match your uploaded IDs. Genes are the default object.
5.  Choose “search” under Step 2.
6.  A gene list will appear that includes all of the recognized uploaded IDs.
7.  You can view the unmapped IDs by clicking on the “Unmapped” link at the top of the returned list.

<span class="linesep">![](/images/spacer.gif)</span>  
<span class="header1"><a name="IV.">Section IV. Analyze gene, protein or transcript lists by function.</a></span>  

<u><a name="IV.A.">IV.A. Visualize a list of genes as a “pie chart” broken down by gene function.</a></u>

1.  Create a genelist as outlined in [section II](#II.), or use the “batch upload” page.
2.  Select “MF pie chart” (to categorize genes by molecular functions), “BP pie chart” (to categorize genes by biological processes) or “Pathway pie chart” from the pull-down menu under the pie chart icon. You can now use the pie chart view [(V.D.)](#V.D.).

<u><a name="IV.B.">IV.B. Analyze a list of genes in terms of statistically over- and -under-represented functions.</a></u>

For example, you can correlate gene expression clusters with biological process (or molecular function) categories. This will allow you to look for statistically over- and under-represented biological processes among the genes in each cluster.

1.  Click on the “Tools” menu item, and then click on the “Gene Expression Data Analysis” link, and then click on the “Lists of Genes” link.
2.  Follow the directions provided on the page. You will need to either upload the gene lists ([III.D](#III.D.)), or choose them from your workspace ([V.B](#V.B.)).
3.  You can analyze the list relative to molecular functions, biological processes or pathways, one at a time. To perform another analysis on the same data, just click on the back button of your browser.
4.  When analyzing relative to pathway, clicking on the pathway name link will display the graphical pathway view with the genes/proteins in each list colored the same way.

<u><a name="IV.C.">IV.C. Analyze a list of gene-value pairs.</a></u>

For example, you can upload a list of genes and their corresponding fold-change values from a differential gene expression experiment. The values for the genes in each ontology category (e.g. the angiogenesis pathway) will be compared statistically to the overall distribution of values to look for coordinated shifts across that category. This approach has been used by our group (Clark et al., Science 302: 1960, 2003) and is similar to a method from Eric Lander's group (Mootha et al., Nature Genetics 34: 267, 2003), to find weak coordinated shifts that elude methods such as [IV.B](#IV.B.).

1.  Click on the “Tools” menu item, and then click on the “Gene Expression Data Analysis” link, and then click on the “Lists of Genes with values” link.
2.  Follow the directions provided on the page. You will need to upload a tab-delimited file in which at least one column contains gene or protein identifiers (Entrez gene identifiers, GenBank accession numbers, or gene symbols), and at least one other column contains numerical values.
3.  You can analyze the list relative to molecular functions, biological processes or pathways, one at a time. Press the “map genes to ontology” button to launch the analysis. To perform another analysis on the same data, just click on the back button of your browser.
4.  From the results page, you can view the distribution of values for each category, and how it compares to the overall distribution, by selecting the checkbox next to the category name, and then pressing the “Graph selected categories” button.
5.  For pathways, clicking on the pathway name link will display the graphical pathway view with genes/proteins colored by a hot-cold scale of the uploaded values (red is higher values).

<span class="linesep">![](/images/spacer.gif)</span>  
<span class="linesep">![](/images/spacer.gif)</span>  
<span class="header1"><a name="V.">Section V. Web Services</a></span>

In order not to overload the PANTHER servers, it is recommended that users receive response from a web service request before sending a new request. Failure to comply with this policy may result in the IP address being blocked from accessing PANTHER.

<u><a name="V.A.">V.A. Search for orthologs.</a></u>

1.  Search via a URL
    *   The following parameters are required.
        *   type - This refers to the search type and should be specified as "matchingOrtholog"
        *   inputOrganism - The organism/genome being queried by the search term(s)
        *   targetOrganism -  Target organism for ortholgos from search.  Multiple organisms can be specified, separated by commas
        *   orthologType - LDO or all - LDO will return only least diverged ortholog for each gene (single "best" ortholog), and all will return all orthologs if more than one
        *   searchTerm - query terms, these should optimally be Uniprot of MOD gene identifiers, but, other identifiers are supported such as gene symbols.  Maximum of 10 query terms can be submitted, separated by commas.
        *   For the inputOrganism and targetOrganism, the 5-letter Uniprot code is used, see the Short Name field on the [summaryStats page](/panther/summaryStats.jsp) for a list of available organisms and the associated codes.
    *   Example - http://www.pantherdb.org/webservices/ortholog.jsp?type=matchingOrtholog&inputOrganism=MOUSE&targetOrganism=HUMAN&orthologType=all&searchTerm=101816
    *   For each match, the following data are returned:
        *   If search term has no match in the input organism:
            *   <searchTerm>    "Search term not found in input organism <inputOrganism"
        *   If gene is found, but it has no ortholog in the database or orthologType specified is not found in the database:
            *   <searchTerm>     <matchedGene>    "No ortholog found in target organism <targetOrganism>"
        *   If one or more hit, example results, one line per match (each field is tab-separated):
        *   101816 MOUSE|MGI=MGI=101816|UniProtKB=P43247 HUMAN|ENSEMBL=ENSG00000095002|UniProtKB=P43246 MSH2 LDO 

        1.  > searchTerm that was matched

        2.  > Information about matched gene in input organism:organism|gene_id(database=id)|protein_id(database=id)

        3.  > information about ortholog in target organism:    organism|gene_id(database=id)|protein_id(database=id)

        4.  > gene symbol of the matched gene in the target organism

        5.  > Type of ortholog, LDO (least diverged) or O (other ortholog, if more than one) or P for paralog or X for horizontal gene transfer or LDX for least diverged horizontal gene transfer

2.  Search via http post. - Sample Java code snippit given below describes how to utilize the web service:

<pre>package test;

import java.io.File;
import java.io.IOException;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.MultipartPostMethod;
import org.apache.commons.httpclient.methods.multipart.FilePart;

public class OrthologTest {
    public static void main(String args[]) {
        try {
            HttpClient client = new HttpClient( );
            MultipartPostMethod method = new MultipartPostMethod("http://pantherdb.org/webservices/ortholog.jsp?");

            //Define name-value pairs to set into the QueryString
            method.addParameter("type", "matchingOrtholog"); 
            method.addParameter("inputOrganism","MOUSE");
            method.addParameter( "targetOrganism", "HUMAN");
            method.addParameter("orthologType", "LDO");
            File inputFile = new File("C:\\data_files\\mouse.txt");             // Maximum of ten search terms delimited by line return
            method.addPart(new FilePart("searchList", inputFile, "text/plain","ISO-8859-1" ) );

            // Execute and print response
            client.executeMethod( method );
            String response = method.getResponseBodyAsString( );
            System.out.println( response );
            method.releaseConnection( );

        }
        catch( IOException e ){
            e.printStackTrace();
        }
    }
}

Where file mouse.txt contains, for example, the following:
Msh2
Msh6
fakemouse

and is located in directory C:\data_files
               </pre>

<u><a name="V.B.">V.B. Keyword search count</a></u>

*   The base URL is http://www.pantherdb.org/webservices/garuda/search.jsp?. Example http://www.pantherdb.org/webservices/garuda/search.jsp?keyword=MySearchTerm&type=getDataSetCount where MySearchTerm is users search term. The following parameters are required.

*   keyword - This is the search term. Only one term will be supported
*   type - getDataSetCount

*   The service will return a tab delimited http response with a row for each type of result and the count. A row will be returned for each of the following types

*   gene
*   family
*   pathway
*   category - Note, this is the 'GO slim' category and PANTHER protein class category

*   There will be two columns

*   data type
*   count

<u><a name="V.C.">V.C. Keyword search list</a></u>

*   The base URL is http://www.pantherdb.org/webservices/garuda/search.jsp?. Example http://www.pantherdb.org/webservices/garuda/search.jsp?keyword=MySearchTerm&listType=gene&type=getList where MySearchTerm is the search term and Gene is the type of list requested. The following parameters are required.

*   keyword - This is the search term. Only one term will be supported
*   type - getList
*   listType - type of list requested

*   The gene result will have the following columns:

*   Gene Accession
*   Gene Name
*   Gene Symbol

*   The family result will have the following columns:

*   Family Accession
*   Family Name

*   The pathway result will have the following columns:

*   Pathway Accession
*   Pathway Name
*   Author

*   The category result will have the following columns:

*   Category Accession
*   Category Name

<u><a name="V.D.">V.D. Search for supported organisms</a></u>

*   This service is used to get the list of organisms supported by PANTHER. The base URL is http://www.pantherdb.org/webservices/garuda/search.jsp?type=organism. The following parameter is required.

*   type - organism

*   The result will have the following columns:

*   Long Name
*   Short Name

<u><a name="V.E.">V.E. Over-representation test</a></u>

*   Search via http post. The base URL is http://www.pantherdb.org/webservices/garuda/tools/enrichment/VER_2/enrichment.jsp? The following parameters are required:

*   organism - Use PANTHER supported organism web service to determine list of suported organisms. The long name is used as a parameter.
*   geneList - Text file with one id per line. With entries from one of the following sources: (UniProt, Ensemble, RefSeq, EntrezGene, gene symbols).
*   enrichmentType - (function, process, cellular_location, protein_class, pathway, fullGO_function, fullGO_process, fullGO_component, reactome)
*   test_type - (FISHER or BINOMIAL). This parameter is optional, if not specified the system will use FISHER.
*   correction - (FDR, BONFERRONI, NONE). If not specified, the system will calculate FDR.
*   type - enrichment

*   The following parameter is optional.

*   test_type - This specifies the test to use. This can be set to 'FISHER' or 'BINOMIAL'. If not specified, the system will use Fisher’s Exact test. If 'BINOMIAL' is specified, the Binomial test will be performed

*   The result will have following columns:

*   Id - Id for the associated enrichment type
*   Name - Name of associated id
*   GeneId
*   P-value - If the Fisher test is performed or Binomial with no correction, this is the raw P-Value. If the Bonferroni correction is specified, then the Bonferroni correction has been applied to the raw P-Value.
*   FDR - False Discovery Rate if FDR correction is calculated

*   Any language that supports http multipart post can be used to invoke the web service. Using Apache httpClient (https://hc.apache.org/downloads.cgi), httpCore (https://hc.apache.org/downloads.cgi) and commons-io (https://commons.apache.org/proper/commons-io/download_io.cgi) libraries, the following java code snippet given below describes how to utilize the web service:

<pre>package testproject;

import java.io.File;
import java.nio.charset.StandardCharsets;
import org.apache.commons.io.IOUtils;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.entity.mime.content.StringBody;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class TestProject {

    public static void main(String args[]) throws Exception {
        CloseableHttpClient httpclient = HttpClients.createDefault();
        try {
            HttpPost httppost = new HttpPost("http://pantherdb.org/webservices/garuda/tools/enrichment/VER_2/enrichment.jsp?");

            StringBody organism = new StringBody("Homo sapiens", ContentType.TEXT_PLAIN);
            FileBody fileData = new FileBody(new File("c:\\data_files\\gene_expression_files\\7_data\\humanEnsembl"), ContentType.TEXT_PLAIN);
            StringBody enrichmentType = new StringBody("process", ContentType.TEXT_PLAIN);       //"function", "process", "cellular_location", "protein_class", "pathway", "fullGO_function", "fullGO_process", "fullGO_component", "reactome"
            StringBody testType = new StringBody("FISHER", ContentType.TEXT_PLAIN);     // "FISHER", "BINOMIAL" .  This parameter is optional; If not specified, the system will perform Fisher’s Exact test
            //StringBody cor = new StringBody("FDR", ContentType.TEXT_PLAIN);
            //StringBody cor = new StringBody("BONFERRONI", ContentType.TEXT_PLAIN);
            //StringBody cor = new StringBody("NONE", ContentType.TEXT_PLAIN);
            StringBody type = new StringBody("enrichment", ContentType.TEXT_PLAIN);

            HttpEntity reqEntity = MultipartEntityBuilder.create()
                    .addPart("organism", organism)
                    .addPart("geneList", fileData)
                    .addPart("enrichmentType", enrichmentType)
                    .addPart("test_type", testType)
                    .addPart("type", type)
                    //.addPart("correction", cor)
                    .build();
            httppost.setEntity(reqEntity);

            CloseableHttpResponse response = httpclient.execute(httppost);
            try {
//                System.out.println("----------------------------------------");
//                System.out.println(response.getStatusLine());
                HttpEntity resEntity = response.getEntity();
                if (resEntity != null) {
                    System.out.println(IOUtils.toString(resEntity.getContent(), StandardCharsets.UTF_8));

                }
                EntityUtils.consume(resEntity);
            } finally {
                response.close();
            }
        } finally {
            httpclient.close();
        }
    }

}

        </pre>

<span class="header1"><a name="VI.">Section VI. Helpful Tips.</a></span>  

<u><a name="VI.A.">VI.A. Converting a list to another list type.</a></u>

1.  When on a list page, click on the pull-down menu after “Convert list to:“. The current list type is shown in the box.
2.  Select the new list type from the pull-down menu.
3.  Each primary ID (first column of the list) is used to return the selected data type. Note that the mapping between different types is not necessarily one-to-one (e.g. a gene can map to more than one associated transcript).

<u><a name="VI.B.">VI.B. Saving a list to your workspace.</a></u>

1.  NOTE: this requires registration (register now for free)
2.  From the list page, select “workspace“ in the “Send list to“ pull-down menu.
3.  A pop-up window will ask you to name the list and add any comments. The name and comments can be edited at any time in the future from the Workspace page.
4.  The gene list is now stored at the site, and can be returned to at any time. Only the IDs are stored, so when you access a list in the future, all information will be updated and current.

<u><a name="VI.C.">VI.C. Exporting a list.</a></u>

1.  From the list page, select “file“ in the “send list to:“ pull-down menu.
2.  The list will be exported as a tab-delimited file.
3.  You can now import the file into Excel or perform any post-processing you wish.

<u><a name="VI.D.">VI.D. Using the pie chart view.</a></u> In this view, you can:

1.  Make the pie chart larger or smaller. Choose a magnification percentage from the pull-down menu and press the “zoom“ button.
2.  Convert to a bar chart view by clicking on “bar chart“.
3.  View the category of a pie slice by putting the mouse over the slice.
4.  Get a gene list for a particular slice of the pie by clicking on the name of the category in the legend.
5.  View a more detailed breakdown of a category by clicking on a pie slice. For example, clicking on “Receptor“ will bring up a new pie chart in which the receptors are broken down by subtypes, e.g. “G protein-coupled receptor“ and “protein kinase receptor“.
