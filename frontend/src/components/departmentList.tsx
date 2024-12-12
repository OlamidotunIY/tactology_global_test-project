"use client";

import { GetDepartmentsQuery } from "@/gql/graphql";
import { DELETE_DEPARTMENT } from "@/graphql/mutations/deleteDepartment";
import { GET_DEPARTMENTS } from "@/graphql/quaries/GetDepartments";
import { useMutation, useQuery } from "@apollo/client";
import { Dispatch, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "./ui/button";
import { ChevronRight, PencilIcon, Trash } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CreateDepartment from "./createDepartment";
import UpdateDepartment from "./updateDepartment";

type Props = {};
export const DepartmentList = ({}: Props) => {
  const [id, setId] = useState<string | null>(null);
  const { data, loading, error } =
    useQuery<GetDepartmentsQuery>(GET_DEPARTMENTS);

  const [deleteDepartment] = useMutation(DELETE_DEPARTMENT, {
    variables: { id },
    refetchQueries: [{ query: GET_DEPARTMENTS }],
  });

  const handleDelete = async () => {
    await deleteDepartment().catch((error) => {
      console.log(error);
    });
  };

  if (loading)
    return (
      <div className="flex flex-1 flex-col gap-4 p-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="aspect-video h-12 w-full rounded-lg bg-muted/50"
          />
        ))}
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  if (data?.getDepartments?.length === 0)
    return (
      <div className="w-full flex h-[80vh] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">No Departments Found</h1>
          <CreateDepartment />
        </div>
      </div>
    );
  return (
    <div className="w-full">
      <div className="mt-2 mb-5">
        <CreateDepartment />
      </div>
      {data?.getDepartments?.map((department) => (
        <DepartmentItem
          key={department.id}
          id={department.id as string}
          name={department.name as string}
          setId={setId}
          handleDelete={handleDelete}
          subDepartment={department.subDepartments as []}
        />
      ))}
    </div>
  );
};

const DepartmentItem = ({
  id,
  name,
  setId,
  handleDelete,
  subDepartment,
}: {
  id: string;
  name: string;
  setId: Dispatch<string | null>;
  handleDelete: () => void;
  subDepartment: [];
}) => {
  return (
    <Collapsible className="w-full">
      <div className="w-full p-3 shadow-sm">
        <div className="flex justify-between w-full items-center">
          <div className="flex-1 flex items-start">
            <h1 className="text-xl font-bold">{name}</h1>
          </div>

          <div className="flex gap-2">
            <div className="flex gap-2">
              <UpdateDepartment name={name} id={id} />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant={"destructive"}
                    size={"icon"}
                    onClick={() => setId(id)}
                  >
                    <Trash />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to delete this department?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the department and all its sub departments.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <CollapsibleTrigger className="w-full" asChild>
              <div className="data-[state=open]:rotate-90 p-2 cursor-pointer">
                <ChevronRight />
                <span className="sr-only">Toggle</span>
              </div>
            </CollapsibleTrigger>
          </div>
        </div>
      </div>
      <CollapsibleContent>
        <div className="p-4">
          <h1 className="text-lg font-bold">Sub Departments</h1>
          <ul className="flex flex-col gap-2 mt-2">
            {subDepartment?.map((sub: any) => (
              <li key={sub.id} className="flex items-center gap-2">
                <div className="text-xs">{sub.name}</div>
                <div>
                  <div>
                    <Trash className="text-red-700 w-3 h-3 cursor-pointer" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
